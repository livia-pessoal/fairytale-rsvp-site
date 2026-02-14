-- Create table for family-based RSVP confirmations
-- This table stores individual confirmations for each family member
CREATE TABLE IF NOT EXISTS public.family_rsvp (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  family_name TEXT NOT NULL,
  member_name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  responder_name TEXT,
  responder_contact TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.family_rsvp ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public RSVP submissions
CREATE POLICY "Allow public family RSVP submissions" 
ON public.family_rsvp 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading family RSVPs
CREATE POLICY "Allow reading family RSVPs" 
ON public.family_rsvp 
FOR SELECT 
USING (true);

-- Create index for faster queries by family name
CREATE INDEX idx_family_rsvp_family_name ON public.family_rsvp(family_name);

-- Create index for faster queries by created_at
CREATE INDEX idx_family_rsvp_created_at ON public.family_rsvp(created_at DESC);

-- Add comment to table
COMMENT ON TABLE public.family_rsvp IS 'Stores RSVP confirmations for wedding guests organized by family. Each row represents one family member confirmation.';
