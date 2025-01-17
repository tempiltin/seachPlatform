import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-gray-50  p-4 hover:bg-gray-100 transition duration-200">
      <p className="text-gray-600 font-bold">
        Javob: {question.javob}
      </p>
    </div>
  );
}