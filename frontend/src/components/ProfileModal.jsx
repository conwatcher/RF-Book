import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';

const ProfileModal = ({ profile, isOpen, onClose }) => {
  if (!profile) return null;

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Character': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Location': 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border-zinc-700 text-white">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 pr-8">
            <div className="space-y-3 flex-1">
              <DialogTitle className="text-3xl font-bold text-white leading-tight">
                {profile.name}
              </DialogTitle>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="outline" className={getCategoryColor(profile.category)}>
                  {profile.category}
                </Badge>
                <span className="text-orange-400 font-medium">
                  {profile.title}
                </span>
              </div>
              <p className="text-zinc-400 text-sm">
                <span className="text-zinc-500">Appears in:</span> <span className="text-zinc-300">{profile.book}</span>
              </p>
            </div>
          </div>
        </DialogHeader>
        
        <DialogDescription asChild>
          <div className="space-y-4 mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            
            <div className="prose prose-invert prose-zinc max-w-none">
              {profile.biography.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-zinc-300 leading-relaxed text-base mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mt-8" />
            
            <div className="flex items-center justify-center pt-2">
              <a 
                href="https://www.redfoundationsbook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors duration-300 flex items-center gap-2"
              >
                <span>Learn more about Red Foundations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
