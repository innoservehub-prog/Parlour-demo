import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO, APPOINTMENT_SERVICES, TIME_SLOTS } from '../../config/business';
import { createAppointment } from '../../services/appointmentService';

export default function BookingForm({ initialService = "", initialOffer = "" }) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    service: initialService || APPOINTMENT_SERVICES[0],
    preferredDate: '',
    preferredTime: TIME_SLOTS[0],
    message: initialOffer ? `Applying offer code: ${initialOffer}` : '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Set minimum date to today (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (initialService) {
      // Find closest match or set directly
      const matched = APPOINTMENT_SERVICES.find(s => s.toLowerCase() === initialService.toLowerCase()) || initialService;
      setFormData(prev => ({ ...prev, service: matched }));
    }
  }, [initialService]);

  const validate = () => {
    const errs = {};
    if (!formData.customerName.trim()) {
      errs.customerName = 'Please enter your full name.';
    } else if (formData.customerName.trim().length < 2) {
      errs.customerName = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (e.g. 9876543210).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      errs.service = 'Please select a beauty service.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = 'Date cannot be in the past.';
    }

    if (!formData.preferredTime) {
      errs.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await createAppointment(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setSubmitError('Unable to process your request right now. Please try again or book directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello,\nI would like to book an appointment at ${BUSINESS_INFO.name}.\n\nName: ${formData.customerName || '[Your Name]'}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || '[Preferred Date]'}\nPreferred Time: ${formData.preferredTime || '[Preferred Time]'}${formData.message ? `\nNote: ${formData.message}` : ''}\n\nPlease confirm my appointment.`;
    
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleResetForm = () => {
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      service: APPOINTMENT_SERVICES[0],
      preferredDate: '',
      preferredTime: TIME_SLOTS[0],
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-parlour-rose/20 shadow-soft-lg relative">
      
      {/* SUCCESS CONFIRMATION MODAL / STATE */}
      {isSubmitted ? (
        <div className="py-8 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-parlour-burgundy">
              Appointment Request Submitted!
            </h3>
            <p className="text-sm sm:text-base text-parlour-charcoal/80 font-light leading-relaxed">
              Thank you, <strong className="font-semibold text-parlour-burgundy">{formData.customerName}</strong>! Our salon desk has received your booking request for <strong className="font-semibold text-parlour-rose-dark">{formData.service}</strong> on <strong className="font-semibold">{formData.preferredDate}</strong> at <strong className="font-semibold">{formData.preferredTime}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-parlour-blush border border-parlour-rose/20 max-w-md mx-auto text-xs text-parlour-muted text-left space-y-1">
            <p className="font-semibold text-parlour-burgundy flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-parlour-gold" />
              What happens next?
            </p>
            <p>
              Our front desk will contact you via phone or WhatsApp shortly to confirm your booking and ensure therapist availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={handleWhatsAppBooking}
              className="btn-primary bg-emerald-700 hover:bg-emerald-800 text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Send Details on WhatsApp
            </button>
            <button
              onClick={handleResetForm}
              className="btn-secondary text-xs font-semibold py-3 px-6 rounded-full"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        /* APPOINTMENT FORM */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-parlour-rose/15 pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-parlour-burgundy">
              Reserve Your Experience
            </h3>
            <p className="text-xs sm:text-sm text-parlour-muted font-light mt-1">
              Please enter your details below. We will reach out to confirm your scheduled slot.
            </p>
          </div>

          {submitError && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              <span>{submitError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Full Name <span className="text-parlour-rose-dark">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className={`w-full px-4 py-3 pl-11 rounded-2xl border ${
                    errors.customerName ? 'border-rose-400 bg-rose-50/50' : 'border-parlour-rose/25 bg-parlour-blush/20'
                  } focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal placeholder:text-parlour-muted/50`}
                />
                <User className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5" />
              </div>
              {errors.customerName && (
                <p className="text-xs text-rose-600">{errors.customerName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Phone Number <span className="text-parlour-rose-dark">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 pl-11 rounded-2xl border ${
                    errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-parlour-rose/25 bg-parlour-blush/20'
                  } focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal placeholder:text-parlour-muted/50`}
                />
                <Phone className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5" />
              </div>
              {errors.phone && (
                <p className="text-xs text-rose-600">{errors.phone}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Email Address <span className="text-parlour-muted font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. priya@gmail.com"
                  className={`w-full px-4 py-3 pl-11 rounded-2xl border ${
                    errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-parlour-rose/25 bg-parlour-blush/20'
                  } focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal placeholder:text-parlour-muted/50`}
                />
                <Mail className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5" />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-600">{errors.email}</p>
              )}
            </div>

            {/* Select Service */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Select Service <span className="text-parlour-rose-dark">*</span>
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-11 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal appearance-none cursor-pointer"
                >
                  {APPOINTMENT_SERVICES.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
                <Sparkles className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5 pointer-events-none" />
              </div>
              {errors.service && (
                <p className="text-xs text-rose-600">{errors.service}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Preferred Date <span className="text-parlour-rose-dark">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="preferredDate"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pl-11 rounded-2xl border ${
                    errors.preferredDate ? 'border-rose-400 bg-rose-50/50' : 'border-parlour-rose/25 bg-parlour-blush/20'
                  } focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal`}
                />
                <Calendar className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5 pointer-events-none" />
              </div>
              {errors.preferredDate && (
                <p className="text-xs text-rose-600">{errors.preferredDate}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Preferred Time <span className="text-parlour-rose-dark">*</span>
              </label>
              <div className="relative">
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-11 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal appearance-none cursor-pointer"
                >
                  {TIME_SLOTS.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <Clock className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5 pointer-events-none" />
              </div>
              {errors.preferredTime && (
                <p className="text-xs text-rose-600">{errors.preferredTime}</p>
              )}
            </div>

          </div>

          {/* Additional Message / Special Requests */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
              Additional Message / Special Request
            </label>
            <div className="relative">
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any skin sensitivity, bridal trials, group booking, or specific stylist preference..."
                className="w-full px-4 py-3 pl-11 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-sm text-parlour-charcoal placeholder:text-parlour-muted/50"
              />
              <MessageSquare className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            {/* Book Appointment Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 py-4 text-sm font-semibold tracking-wider uppercase rounded-full shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-parlour-gold-light" />
                  <span>BOOK APPOINTMENT</span>
                </>
              )}
            </button>

            {/* Book Via WhatsApp Button */}
            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="px-6 py-4 rounded-full text-sm font-semibold tracking-wide text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>BOOK VIA WHATSAPP</span>
            </button>
          </div>

          <p className="text-[11px] text-parlour-muted text-center pt-1 font-light italic">
            * Submitting this form sends an appointment request. Our team will verify therapist availability and confirm your booking.
          </p>
        </form>
      )}

    </div>
  );
}
