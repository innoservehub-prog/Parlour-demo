import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

export default function DeleteConfirmModal({ appointment, onConfirm, onCancel }) {
  if (!appointment) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onCancel}
    >
      <div
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-200 text-center space-y-4 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif font-bold text-xl text-parlour-burgundy">
            Confirm Appointment Deletion
          </h3>
          <p className="text-sm text-parlour-muted font-light leading-relaxed">
            Are you sure you want to delete the appointment for <strong className="font-semibold text-parlour-burgundy">{appointment.customerName}</strong> ({appointment.service})?
          </p>
          <p className="text-xs text-rose-600 font-medium">
            This action cannot be undone.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-parlour-charcoal bg-parlour-blush hover:bg-parlour-blush-soft transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(appointment.id)}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-md flex items-center gap-1.5 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
