import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, 
  Search, 
  Filter, 
  Calendar as CalendarIcon, 
  ArrowUpDown, 
  Sparkles, 
  RefreshCw,
  PlusCircle,
  Clock,
  CheckCircle2,
  CheckCheck,
  XCircle,
  Database
} from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import StatCard from '../../components/admin/StatCard';
import AppointmentTable from '../../components/admin/AppointmentTable';
import AppointmentCard from '../../components/admin/AppointmentCard';
import AppointmentDetailsModal from '../../components/admin/AppointmentDetailsModal';
import DeleteConfirmModal from '../../components/admin/DeleteConfirmModal';
import { 
  subscribeToAppointments, 
  updateAppointmentStatus, 
  deleteAppointment 
} from '../../services/appointmentService';
import { BUSINESS_INFO } from '../../config/business';
import { isFirebaseConfigured } from '../../config/firebase';

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search, Filters & Sorting state
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all | pending | confirmed | completed | cancelled
  const [dateFilter, setDateFilter] = useState('all'); // all | today | upcoming | custom
  const [customDate, setCustomDate] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest | oldest | appointmentDate

  // Active Modals
  const [viewingAppointment, setViewingAppointment] = useState(null);
  const [deletingAppointment, setDeletingAppointment] = useState(null);

  // Real-time listener subscription
  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToAppointments((data) => {
      setAppointments(data);
      setLoading(false);
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Calculate dynamic stats
  const stats = useMemo(() => {
    const total = appointments.length;
    const pending = appointments.filter((a) => (a.status || '').toLowerCase() === 'pending').length;
    const confirmed = appointments.filter((a) => (a.status || '').toLowerCase() === 'confirmed').length;
    const completed = appointments.filter((a) => (a.status || '').toLowerCase() === 'completed').length;
    const cancelled = appointments.filter((a) => (a.status || '').toLowerCase() === 'cancelled').length;
    return { total, pending, confirmed, completed, cancelled };
  }, [appointments]);

  // Handle status update
  const handleUpdateStatus = async (id, newStatus) => {
    await updateAppointmentStatus(id, newStatus);
    if (viewingAppointment && viewingAppointment.id === id) {
      setViewingAppointment(prev => ({ ...prev, status: newStatus }));
    }
  };

  // Handle appointment deletion
  const handleDeleteConfirm = async (id) => {
    await deleteAppointment(id);
    setDeletingAppointment(null);
    if (viewingAppointment && viewingAppointment.id === id) {
      setViewingAppointment(null);
    }
  };

  // Handle WhatsApp Customer messaging
  const handleSendWhatsApp = (appointment) => {
    const cleanPhone = appointment.phone.replace(/[^0-9]/g, '');
    const phoneWithCountry = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    let messageText = '';
    if ((appointment.status || '').toLowerCase() === 'confirmed') {
      messageText = `Hello ${appointment.customerName},\n\nYour appointment for ${appointment.service} on ${appointment.preferredDate} at ${appointment.preferredTime} has been confirmed.\n\nThank you,\n${BUSINESS_INFO.name}`;
    } else {
      messageText = `Hello ${appointment.customerName},\n\nYour appointment for ${appointment.service} on ${appointment.preferredDate} at ${appointment.preferredTime} has been received.\n\nThank you,\n${BUSINESS_INFO.name}`;
    }

    const url = `https://wa.me/${phoneWithCountry}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  // Filter and sort appointments
  const filteredAppointments = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];

    return appointments
      .filter((apt) => {
        // Status Filter
        if (statusFilter !== 'all') {
          if ((apt.status || '').toLowerCase() !== statusFilter.toLowerCase()) return false;
        }

        // Search Filter (Name, Phone, Service)
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchName = (apt.customerName || '').toLowerCase().includes(q);
          const matchPhone = (apt.phone || '').toLowerCase().includes(q);
          const matchService = (apt.service || '').toLowerCase().includes(q);
          if (!matchName && !matchPhone && !matchService) return false;
        }

        // Date Filter
        if (dateFilter === 'today') {
          if (apt.preferredDate !== today) return false;
        } else if (dateFilter === 'upcoming') {
          if (apt.preferredDate < today) return false;
        } else if (dateFilter === 'custom' && customDate) {
          if (apt.preferredDate !== customDate) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        }
        if (sortBy === 'oldest') {
          return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
        }
        if (sortBy === 'appointmentDate') {
          return (a.preferredDate || '').localeCompare(b.preferredDate || '');
        }
        return 0;
      });
  }, [appointments, searchTerm, statusFilter, dateFilter, customDate, sortBy]);

  return (
    <div className="min-h-screen bg-parlour-cream flex">
      
      {/* Sidebar for Desktop / Mobile Drawer */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Admin Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-parlour-rose/15 px-4 sm:px-8 py-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-parlour-burgundy bg-parlour-blush"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-parlour-burgundy">
                Welcome, Admin
              </h1>
              <p className="text-xs text-parlour-muted font-light">
                {BUSINESS_INFO.name} — Real-time Appointment Desk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Database indicator */}
            <div className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isFirebaseConfigured 
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                : 'bg-amber-100 text-amber-800 border border-amber-300'
            }`}>
              <Database className="w-3.5 h-3.5" />
              <span>{isFirebaseConfigured ? 'Live Firestore' : 'Local Demo Sync'}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          
          {/* STATISTIC CARDS */}
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatCard
              title="Total Requests"
              count={stats.total}
              type="total"
              activeFilter={statusFilter}
              onClick={() => setStatusFilter('all')}
            />
            <StatCard
              title="Pending"
              count={stats.pending}
              type="pending"
              activeFilter={statusFilter}
              onClick={() => setStatusFilter('pending')}
            />
            <StatCard
              title="Confirmed"
              count={stats.confirmed}
              type="confirmed"
              activeFilter={statusFilter}
              onClick={() => setStatusFilter('confirmed')}
            />
            <StatCard
              title="Completed"
              count={stats.completed}
              type="completed"
              activeFilter={statusFilter}
              onClick={() => setStatusFilter('completed')}
            />
            <StatCard
              title="Cancelled"
              count={stats.cancelled}
              type="cancelled"
              activeFilter={statusFilter}
              onClick={() => setStatusFilter('cancelled')}
            />
          </section>

          {/* SEARCH, FILTERS & SORTING CONTROLS */}
          <section className="bg-white rounded-3xl p-5 sm:p-6 border border-parlour-rose/20 shadow-soft space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search customer name, phone, or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-xs sm:text-sm text-parlour-charcoal focus:outline-none focus:ring-2 focus:ring-parlour-rose/40"
                />
                <Search className="w-4 h-4 text-parlour-rose-muted absolute left-3.5 top-3" />
              </div>

              {/* Status Filter Dropdown / Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 text-xs text-parlour-muted mr-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Status:</span>
                </div>
                {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
                      statusFilter === status
                        ? 'bg-parlour-burgundy text-parlour-gold-light shadow-xs'
                        : 'bg-parlour-blush/60 text-parlour-charcoal hover:bg-parlour-blush border border-parlour-rose/15'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

            </div>

            {/* Date and Sorting Controls Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-parlour-rose/10 text-xs">
              
              {/* Date Filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-parlour-muted flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  Date Filter:
                </span>
                {['all', 'today', 'upcoming', 'custom'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDateFilter(d)}
                    className={`px-3 py-1 rounded-full capitalize font-medium ${
                      dateFilter === d
                        ? 'bg-parlour-rose text-white'
                        : 'bg-parlour-cream text-parlour-charcoal hover:bg-parlour-blush'
                    }`}
                  >
                    {d}
                  </button>
                ))}

                {dateFilter === 'custom' && (
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="px-2 py-1 rounded-xl border border-parlour-rose/25 bg-white text-xs"
                  />
                )}
              </div>

              {/* Sorting */}
              <div className="flex items-center gap-2">
                <span className="text-parlour-muted flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-parlour-rose/25 bg-white text-xs text-parlour-charcoal font-medium cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="appointmentDate">Appointment Date</option>
                </select>
              </div>

            </div>
          </section>

          {/* APPOINTMENT LISTING */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-bold text-xl text-parlour-burgundy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-parlour-gold" />
                Customer Appointments ({filteredAppointments.length})
              </h2>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block">
              <AppointmentTable
                appointments={filteredAppointments}
                onView={setViewingAppointment}
                onUpdateStatus={handleUpdateStatus}
                onSendWhatsApp={handleSendWhatsApp}
                onDelete={setDeletingAppointment}
              />
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {filteredAppointments.length === 0 ? (
                <div className="bg-white rounded-3xl p-8 text-center border border-parlour-rose/20 shadow-soft">
                  <p className="text-sm text-parlour-muted">No appointments found matching your filters.</p>
                </div>
              ) : (
                filteredAppointments.map((apt) => (
                  <AppointmentCard
                    key={apt.id}
                    appointment={apt}
                    onView={setViewingAppointment}
                    onConfirm={(id) => handleUpdateStatus(id, 'Confirmed')}
                    onSendWhatsApp={handleSendWhatsApp}
                    onDelete={setDeletingAppointment}
                  />
                ))
              )}
            </div>
          </section>

        </main>
      </div>

      {/* VIEW MODAL */}
      {viewingAppointment && (
        <AppointmentDetailsModal
          appointment={viewingAppointment}
          onClose={() => setViewingAppointment(null)}
          onUpdateStatus={handleUpdateStatus}
          onSendWhatsApp={handleSendWhatsApp}
        />
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingAppointment && (
        <DeleteConfirmModal
          appointment={deletingAppointment}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingAppointment(null)}
        />
      )}

    </div>
  );
}
