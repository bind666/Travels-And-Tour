
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, X } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

const ArticleModal = ({ article, onClose }: ArticleModalProps) => {
  if (!article) return null;

  return (
    <Dialog open={!!article} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold pr-8">{article.title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {article.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(article.date).toLocaleDateString()}
            </div>
            <span>{article.readTime}</span>
          </div>
          
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm text-gray-600">By {article.author}</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">{article.excerpt}</p>
            <div className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            {article.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
