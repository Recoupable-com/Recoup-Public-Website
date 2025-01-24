'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { jsPDF } from 'jspdf';

export default function PressKit() {
  const [artistData, setArtistData] = useState({
    name: '',
    bio: '',
    genre: '',
    location: '',
    email: '',
    website: '',
    instagram: '',
    spotify: '',
    pressPhoto: null as File | null,
    musicLinks: [''],
    accolades: ['']
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setArtistData({ ...artistData, pressPhoto: file });
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      // Create PDF with better styling
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Set background color
      pdf.setFillColor(248, 248, 248);
      pdf.rect(0, 0, 210, 297, 'F');

      // Add artist name as title with dramatic styling
      pdf.setFontSize(42);
      pdf.setFont('helvetica', 'bold');
      pdf.text(artistData.name.toUpperCase(), 20, 30);

      // Add thick decorative line
      pdf.setDrawColor(0);
      pdf.setLineWidth(1);
      pdf.line(20, 35, 190, 35);

      // Add press photo if exists with proper aspect ratio
      if (artistData.pressPhoto && previewUrl) {
        const img = new Image();
        img.src = previewUrl;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        
        // Calculate aspect ratio
        const aspectRatio = img.width / img.height;
        let imgWidth = 170;
        let imgHeight = imgWidth / aspectRatio;
        
        // If height is too large, scale down
        if (imgHeight > 100) {
          imgHeight = 100;
          imgWidth = imgHeight * aspectRatio;
        }
        
        // Center the image horizontally
        const leftMargin = (210 - imgWidth) / 2;
        pdf.addImage(img, 'JPEG', leftMargin, 45, imgWidth, imgHeight);
      }

      // Calculate starting Y position based on image
      let currentY = artistData.pressPhoto ? 160 : 50;

      // Add bio with dramatic styling
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('BIO', 20, currentY);
      currentY += 8;
      
      // Add small decorative line under section title
      pdf.setLineWidth(0.5);
      pdf.line(20, currentY - 4, 35, currentY - 4);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const bioLines = pdf.splitTextToSize(artistData.bio, 170);
      pdf.text(bioLines, 20, currentY);
      currentY += (bioLines.length * 6) + 15;

      // Add genre and location with modern layout
      pdf.setFillColor(240, 240, 240);
      pdf.rect(20, currentY - 5, 170, 20, 'F');
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('GENRE', 25, currentY + 5);
      pdf.setFont('helvetica', 'normal');
      pdf.text(artistData.genre, 60, currentY + 5);
      
      pdf.setFont('helvetica', 'bold');
      pdf.text('LOCATION', 110, currentY + 5);
      pdf.setFont('helvetica', 'normal');
      pdf.text(artistData.location, 145, currentY + 5);
      
      currentY += 25;

      // Add contact information with icons and modern layout
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('CONTACT', 20, currentY);
      currentY += 8;
      
      // Add small decorative line under section title
      pdf.setLineWidth(0.5);
      pdf.line(20, currentY - 4, 55, currentY - 4);

      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      
      // Create a contact info grid
      const contactGrid = [
        { label: 'Email', value: artistData.email },
        { label: 'Website', value: artistData.website },
        { label: 'Instagram', value: artistData.instagram },
        { label: 'Spotify', value: artistData.spotify }
      ].filter(item => item.value);

      contactGrid.forEach((item, index) => {
        const xPos = index % 2 === 0 ? 20 : 110;
        const yPos = currentY + Math.floor(index / 2) * 10;
        
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${item.label}:`, xPos, yPos);
        pdf.setFont('helvetica', 'normal');
        pdf.text(item.value, xPos + 25, yPos);
      });

      currentY += Math.ceil(contactGrid.length / 2) * 10 + 15;

      // Add featured music with modern styling
      if (artistData.musicLinks.some(link => link)) {
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.text('FEATURED MUSIC', 20, currentY);
        currentY += 8;
        
        // Add small decorative line under section title
        pdf.setLineWidth(0.5);
        pdf.line(20, currentY - 4, 85, currentY - 4);

        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        
        // Add gray background for music links
        artistData.musicLinks.forEach((link, index) => {
          if (link) {
            if (index % 2 === 0) {
              pdf.setFillColor(245, 245, 245);
              pdf.rect(20, currentY - 4, 170, 8, 'F');
            }
            pdf.text(`• ${link}`, 25, currentY);
            currentY += 8;
          }
        });
        currentY += 7;
      }

      // Add achievements with modern styling
      if (artistData.accolades.some(accolade => accolade)) {
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.text('NOTABLE ACHIEVEMENTS', 20, currentY);
        currentY += 8;
        
        // Add small decorative line under section title
        pdf.setLineWidth(0.5);
        pdf.line(20, currentY - 4, 110, currentY - 4);

        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        
        // Add achievements with alternating backgrounds
        artistData.accolades.forEach((accolade, index) => {
          if (accolade) {
            if (index % 2 === 0) {
              pdf.setFillColor(245, 245, 245);
              pdf.rect(20, currentY - 4, 170, 8, 'F');
            }
            pdf.text(`• ${accolade}`, 25, currentY);
            currentY += 8;
          }
        });
      }

      // Add footer with subtle styling
      pdf.setFillColor(240, 240, 240);
      pdf.rect(0, 277, 210, 20, 'F');
      
      pdf.setFontSize(9);
      pdf.setTextColor(128);
      pdf.setFont('helvetica', 'normal');
      const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      pdf.text(`Generated on ${date}`, 20, 287);
      
      // Add watermark
      pdf.setFont('helvetica', 'italic');
      pdf.text('Created with Recoup', 150, 287);

      // Save the PDF
      pdf.save(`${artistData.name.toLowerCase().replace(/\s+/g, '_')}_press_kit.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
    setIsGenerating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generatePDF();
  };

  const addField = (field: 'musicLinks' | 'accolades') => {
    setArtistData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const updateField = (field: 'musicLinks' | 'accolades', index: number, value: string) => {
    setArtistData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const removeField = (field: 'musicLinks' | 'accolades', index: number) => {
    setArtistData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto px-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight font-medium mb-6">
              Press Kit Generator
            </h1>
            <p className="text-gray-500 text-lg">
              Create a professional press kit in minutes. Just fill in your details below.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Artist/Band Name</label>
                  <input
                    type="text"
                    value={artistData.name}
                    onChange={(e) => setArtistData({ ...artistData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                    placeholder="Enter your artist or band name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    value={artistData.bio}
                    onChange={(e) => setArtistData({ ...artistData, bio: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none min-h-[120px]"
                    placeholder="Write a compelling bio (aim for 2-3 paragraphs)"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Genre</label>
                    <input
                      type="text"
                      value={artistData.genre}
                      onChange={(e) => setArtistData({ ...artistData, genre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="e.g. Indie Rock, Hip Hop"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      value={artistData.location}
                      onChange={(e) => setArtistData({ ...artistData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="e.g. Los Angeles, CA"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-medium">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={artistData.email}
                      onChange={(e) => setArtistData({ ...artistData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="contact@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Website</label>
                    <input
                      type="url"
                      value={artistData.website}
                      onChange={(e) => setArtistData({ ...artistData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="https://your-website.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Instagram</label>
                    <input
                      type="text"
                      value={artistData.instagram}
                      onChange={(e) => setArtistData({ ...artistData, instagram: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="@username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Spotify</label>
                    <input
                      type="url"
                      value={artistData.spotify}
                      onChange={(e) => setArtistData({ ...artistData, spotify: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="Spotify artist profile URL"
                    />
                  </div>
                </div>
              </div>

              {/* Press Photo */}
              <div>
                <label htmlFor="press-photo" className="block text-sm font-medium mb-2">Press Photo</label>
                <input
                  id="press-photo"
                  type="file"
                  onChange={handlePhotoChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                  accept="image/*"
                  title="Choose a press photo"
                  placeholder="Choose a press photo"
                />
                <p className="mt-2 text-sm text-gray-500">High-resolution photo (landscape recommended)</p>
                {previewUrl && (
                  <div className="mt-4">
                    {/* Using img element for file upload preview since next/image doesn't support blob URLs */}
                    <img 
                      src={previewUrl} 
                      alt="Preview"
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxHeight: '300px' }}
                    />
                    <p className="text-sm text-gray-500 mt-2">Preview of selected photo</p>
                  </div>
                )}
              </div>

              {/* Music Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Featured Music</h3>
                  <button
                    type="button"
                    onClick={() => addField('musicLinks')}
                    className="text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    + Add Link
                  </button>
                </div>
                {artistData.musicLinks.map((link, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      value={link}
                      onChange={(e) => updateField('musicLinks', index, e.target.value)}
                      className="flex-grow px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="Add a link to your music (Spotify, SoundCloud, etc.)"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeField('musicLinks', index)}
                        className="px-4 text-gray-400 hover:text-black transition-colors"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Accolades */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Notable Achievements</h3>
                  <button
                    type="button"
                    onClick={() => addField('accolades')}
                    className="text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    + Add Achievement
                  </button>
                </div>
                {artistData.accolades.map((accolade, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={accolade}
                      onChange={(e) => updateField('accolades', index, e.target.value)}
                      className="flex-grow px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-black transition-colors outline-none"
                      placeholder="Add press features, awards, or notable performances"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeField('accolades', index)}
                        className="px-4 text-gray-400 hover:text-black transition-colors"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-black text-white px-8 py-4 rounded-xl text-[15px] font-medium hover:bg-black/90 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating PDF...' : 'Generate Press Kit'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
} 