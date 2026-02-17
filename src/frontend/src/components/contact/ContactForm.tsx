import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const { formData, errors, isSubmitting, submitStatus, handleChange, handleSubmit, resetForm } =
    useContactForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit();
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <Button onClick={resetForm} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6 md:p-8">
      {submitStatus === 'error' && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            There was an error submitting your message. Please try again.
          </AlertDescription>
        </Alert>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={errors.name ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={errors.email ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={6}
          className={errors.message ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
