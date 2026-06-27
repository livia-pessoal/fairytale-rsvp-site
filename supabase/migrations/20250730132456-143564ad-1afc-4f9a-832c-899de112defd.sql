-- Create a table for RSVP confirmations
CREATE TABLE public.rsvp_confirmations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rsvp_confirmations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public access for RSVP submission (since this is a public wedding form)
CREATE POLICY "Allow public RSVP submissions" 
ON public.rsvp_confirmations 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading RSVPs (for potential admin dashboard)
CREATE POLICY "Allow reading RSVPs" 
ON public.rsvp_confirmations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_rsvp_confirmations_updated_at
BEFORE UPDATE ON public.rsvp_confirmations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();