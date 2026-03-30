import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ProfileCard = ({ profile, onClick }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Character': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Location': 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border-zinc-700/50 hover:border-orange-500/50"
      onClick={() => onClick(profile)}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
              {profile.name}
            </h3>
            <Badge variant="outline" className={`shrink-0 ${getCategoryColor(profile.category)}`}>
              {profile.category}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <p className="text-orange-400 font-medium text-sm">
              {profile.title}
            </p>
            <p className="text-zinc-400 text-sm">
              <span className="text-zinc-500">Appears in:</span> {profile.book}
            </p>
          </div>
          
          <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
            {profile.shortDescription}
          </p>
          
          <div className="pt-2 flex items-center text-orange-500 text-sm font-medium group-hover:text-orange-400 transition-colors">
            <span>View Full Profile</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
