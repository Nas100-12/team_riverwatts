'use client';

import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Badge } from './badge';
import { 
  ChevronUp, 
  ChevronDown, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  MoreHorizontal,
  Filter,
  Download,
  FileText,
  FileSpreadsheet,
  ChevronDown as ChevronDownIcon
} from 'lucide-react';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  searchable?: boolean;
  searchPlaceholder?: string;
  pageSize?: number;
  actions?: (row: any) => React.ReactNode;
  title?: string;
}

export function DataTable({ 
  columns, 
  data, 
  searchable = true, 
  searchPlaceholder = "Search...",
  pageSize = 10,
  actions,
  title = "Data"
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});
  const [showExportMenu, setShowExportMenu] = useState(false);

  const filteredData = data.filter(row => {
    const matchesSearch = searchTerm === '' || 
      columns.some(col => 
        String(row[col.key]).toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesFilters = Object.entries(columnFilters).every(([key, value]) => 
      value === '' || String(row[key]).toLowerCase().includes(value.toLowerCase())
    );
    
    return matchesSearch && matchesFilters;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const exportData = (format: 'csv' | 'excel' | 'pdf') => {
    const headers = columns.filter(col => col.key !== 'actions').map(col => col.label);
    const rows = sortedData.map(row => 
      columns.filter(col => col.key !== 'actions').map(col => {
        let value = row[col.key];
        if (col.render && typeof value === 'object') {
          value = String(value).replace(/<[^>]*>/g, ''); // Strip HTML
        }
        return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
      })
    );
    
    if (format === 'csv') {
      const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      downloadFile(blob, `${title.toLowerCase().replace(/\s+/g, '_')}_export.csv`);
    } else if (format === 'excel') {
      const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'application/vnd.ms-excel' });
      downloadFile(blob, `${title.toLowerCase().replace(/\s+/g, '_')}_export.xls`);
    } else if (format === 'pdf') {
      const htmlContent = `
        <html><head><title>${title} Export</title><style>
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style></head><body>
        <h1>${title} Export</h1>
        <table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></body></html>
      `;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      downloadFile(blob, `${title.toLowerCase().replace(/\s+/g, '_')}_export.html`);
    }
    setShowExportMenu(false);
  };

  const downloadFile = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {searchable && (
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <Input
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
            />
          </div>
        )}
        <div className="flex gap-3">
          <Button 
            variant={showFilters ? "default" : "outline"} 
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 border-slate-300 text-slate-700 shadow-sm"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <div className="relative">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-blue-300 text-blue-700 shadow-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
              <ChevronDownIcon className="h-3 w-3 ml-1" />
            </Button>
            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                <button 
                  onClick={() => exportData('csv')}
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3"
                >
                  <FileText className="h-4 w-4 text-green-600" />
                  Export as CSV
                </button>
                <button 
                  onClick={() => exportData('excel')}
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3"
                >
                  <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
                  Export as Excel
                </button>
                <button 
                  onClick={() => exportData('pdf')}
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3"
                >
                  <FileText className="h-4 w-4 text-red-600" />
                  Export as PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="p-6 bg-gradient-to-r from-slate-50/50 via-blue-50/30 to-slate-50/50 rounded-xl border border-slate-200/60 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.filter(col => col.key !== 'actions').map(column => (
              <div key={column.key} className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  {column.label}
                </label>
                <Input
                  placeholder={`Filter by ${column.label.toLowerCase()}...`}
                  value={columnFilters[column.key] || ''}
                  onChange={(e) => setColumnFilters(prev => ({
                    ...prev,
                    [column.key]: e.target.value
                  }))}
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setColumnFilters({});
                setShowFilters(false);
              }}
              className="bg-white/80 hover:bg-white border-slate-300 text-slate-700 shadow-sm"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-200/60 overflow-hidden shadow-sm bg-white/50 backdrop-blur-sm">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-50/80 via-blue-50/40 to-slate-50/80">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-5 text-left border-b border-slate-200/60">
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column.key)}
                      className="flex items-center gap-2 font-semibold text-slate-800 hover:text-blue-700 transition-all duration-200 group"
                    >
                      {column.label}
                      <div className="flex items-center justify-center w-4 h-4">
                        {sortConfig?.key === column.key ? (
                          sortConfig.direction === 'asc' ? (
                            <ChevronUp className="h-4 w-4 text-blue-600" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          )
                        ) : (
                          <ChevronUp className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </button>
                  ) : (
                    <span className="font-semibold text-slate-800">{column.label}</span>
                  )}
                </th>
              ))}
              {actions && <th className="px-6 py-5 text-right font-semibold text-slate-800 border-b border-slate-200/60">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/80">
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-slate-50/30 transition-all duration-200 group">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-slate-700">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 text-right">
                    {actions(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-gradient-to-r from-slate-50/50 to-blue-50/30 px-6 py-4 rounded-xl border border-slate-200/60">
          <p className="text-sm font-medium text-slate-700">
            Showing <span className="text-blue-700 font-semibold">{startIndex + 1}</span> to <span className="text-blue-700 font-semibold">{Math.min(startIndex + pageSize, sortedData.length)}</span> of <span className="text-blue-700 font-semibold">{sortedData.length}</span> results
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="bg-white/80 hover:bg-white border-slate-300 disabled:opacity-50 shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-slate-700">Page</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg font-semibold text-sm">
                {currentPage}
              </span>
              <span className="text-sm font-medium text-slate-700">of {totalPages}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="bg-white/80 hover:bg-white border-slate-300 disabled:opacity-50 shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}