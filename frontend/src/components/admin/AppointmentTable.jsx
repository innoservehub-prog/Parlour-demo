import React from 'react';
import { 
  Eye, 
  CheckCircle2, 
  CheckCheck, 
  XCircle, 
  MessageCircle, 
  Trash2,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

export default function AppointmentTable({
  appointments,
  onView,
  onUpdateStatus,
  onSendWhatsApp,
  onDelete
}) {
  if (!appointments || appointments.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-parlour-rose/20 shadow-soft">
        <Sparkles className="w-10 h-10 text-parlour-gold mx-auto mb-3" />
        <h4 className="font-serif font-bold text-xl text-parlour-burgundy">No Appointments Found</h4>
        <p className="text-xs sm:text-sm text-parlour-muted font-light mt-1">
          Try changing your search terms or filter selections.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-parlour-rose/20 shadow-soft overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-parlour-blush/60 text-parlour-burgundy border-b border-parlour-rose/20">
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Booking ID</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Customer Name</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Contact</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Service</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Date & Time</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Message</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Status</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider">Booked On</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-parlour-rose/10 text-parlour-charcoal/90">
            {appointments.map((apt) => (
              <tr 
                key={apt.id}
                className="hover:bg-parlour-blush/20 transition-colors group"
              >
                {/* Booking ID */}
                <td className="py-4 px-4 font-mono font-medium text-parlour-rose-dark whitespace-nowrap">
                  #{apt.id}
                </td>

                {/* Customer Name */}
                <td className="py-4 px-4 font-serif font-bold text-parlour-burgundy text-sm whitespace-nowrap">
                  {apt.customerName}
                </td>

                {/* Contact (Phone & Email) */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="space-y-0.5">
                    <a 
                      href={`tel:${apt.phone}`} 
                      className="font-medium text-emerald-800 hover:underline block"
                    >
                      {apt.phone}
                    </a>
                    {apt.email && (
                      <span className="text-[11px] text-parlour-muted block truncate max-w-[140px]">
                        {apt.email}
                      </span>
                    )}
                  </div>
                </td>

                {/* Service */}
                <td className="py-4 px-4 font-medium text-parlour-burgundy whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 bg-parlour-blush/60 px-2.5 py-1 rounded-full text-[11px] border border-parlour-rose/15">
                    <Sparkles className="w-3 h-3 text-parlour-gold" />
                    {apt.service}
                  </span>
                </td>

                {/* Preferred Date & Time */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-parlour-rose-dark" />
                      <span>{apt.preferredDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-parlour-muted">
                      <Clock className="w-3 h-3 text-parlour-gold" />
                      <span>{apt.preferredTime}</span>
                    </div>
                  </div>
                </td>

                {/* Message */}
                <td className="py-4 px-4 max-w-[180px]">
                  <p className="truncate text-xs text-parlour-muted font-light italic" title={apt.message}>
                    {apt.message || '—'}
                  </p>
                </td>

                {/* Status */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <StatusBadge status={apt.status} />
                </td>

                {/* Booked On */}
                <td className="py-4 px-4 text-[11px] text-parlour-muted whitespace-nowrap">
                  {apt.createdAt ? new Date(apt.createdAt).toLocaleDateString() : '—'}
                </td>

                {/* Actions */}
                <td className="py-4 px-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1.5">
                    
                    {/* View Modal */}
                    <button
                      onClick={() => onView(apt)}
                      title="View Details"
                      className="p-1.5 rounded-lg text-parlour-burgundy hover:bg-parlour-blush hover:text-parlour-rose-dark transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* WhatsApp Action */}
                    <button
                      onClick={() => onSendWhatsApp(apt)}
                      title="Contact on WhatsApp"
                      className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>

                    {/* Confirm (Pending -> Confirmed) */}
                    {apt.status === 'Pending' && (
                      <button
                        onClick={() => onUpdateStatus(apt.id, 'Confirmed')}
                        title="Confirm Appointment"
                        className="p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-100 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}

                    {/* Complete */}
                    {apt.status === 'Confirmed' && (
                      <button
                        onClick={() => onUpdateStatus(apt.id, 'Completed')}
                        title="Mark as Completed"
                        className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <CheckCheck className="w-4 h-4" />
                      </button>
                    )}

                    {/* Cancel */}
                    {apt.status !== 'Cancelled' && apt.status !== 'Completed' && (
                      <button
                        onClick={() => onUpdateStatus(apt.id, 'Cancelled')}
                        title="Cancel Appointment"
                        className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}

                    {/* Delete */}
                    <button
                      onClick={() => onDelete(apt)}
                      title="Delete Appointment"
                      className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
