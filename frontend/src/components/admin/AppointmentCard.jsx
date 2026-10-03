import React from 'react';
import { Calendar, Clock, Phone, Sparkles, MessageCircle, Eye, CheckCircle2, Trash2 } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

export default function AppointmentCard({
  appointment,
  onView,
  onConfirm,
  onSendWhatsApp,
  onDelete
}) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-parlour-rose/20 shadow-soft space-y-4">
      {/* Header: Name + Badge */}
      <div className="flex items-start justify-between gap-2 border-b border-parlour-rose/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-parlour-muted block">#{appointment.id}</span>
          <h4 className="font-serif font-bold text-lg text-parlour-burgundy uppercase">
            {appointment.customerName}
          </h4>
          <p className="text-xs font-semibold text-parlour-rose-dark flex items-center gap-1 mt-0.5">
            <Sparkles className="w-3 h-3 text-parlour-gold" />
            {appointment.service}
          </p>
        </div>
        <StatusBadge status={appointment.status} />
      </div>

      {/* Date, Time & Phone */}
      <div className="grid grid-cols-2 gap-2 text-xs text-parlour-charcoal/90">
        <div className="flex items-center gap-1.5 bg-parlour-cream p-2 rounded-xl border border-parlour-rose/10">
          <Calendar className="w-3.5 h-3.5 text-parlour-rose-dark shrink-0" />
          <span>{appointment.preferredDate}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-parlour-cream p-2 rounded-xl border border-parlour-rose/10">
          <Clock className="w-3.5 h-3.5 text-parlour-gold shrink-0" />
          <span>{appointment.preferredTime}</span>
        </div>
        <div className="col-span-2 flex items-center gap-1.5 bg-parlour-blush/40 p-2 rounded-xl border border-parlour-rose/10">
          <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <a href={`tel:${appointment.phone}`} className="font-semibold text-parlour-burgundy hover:underline">
            {appointment.phone}
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          onClick={() => onView(appointment)}
          className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-parlour-burgundy bg-parlour-blush hover:bg-parlour-blush-soft border border-parlour-rose/20 flex items-center justify-center gap-1 transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </button>

        {appointment.status === 'Pending' && (
          <button
            onClick={() => onConfirm(appointment.id)}
            className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 flex items-center justify-center gap-1 transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Confirm
          </button>
        )}

        <button
          onClick={() => onSendWhatsApp(appointment)}
          aria-label="WhatsApp customer"
          className="py-2 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-1 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </button>

        <button
          onClick={() => onDelete(appointment)}
          aria-label="Delete appointment"
          className="p-2 rounded-xl text-xs text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
