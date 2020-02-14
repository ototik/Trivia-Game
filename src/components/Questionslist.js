import React from 'react';
import Contact from './Contact'

const questions = [
    {
        question: "What is the capital of Hungary?",
        answer: "Budapest",
    },
    {
        question: "What year was the very first model of the iPhone released?",
        answer: "2007",
        
    },
    {
        question: "What does “HTTP” stand for?",
        answer: "HyperText Transfer Protocol",
        
    },
    {
        question: "What is often seen as the smallest unit of memory?",
        answer: "kilobyte",
    },
    {
        question: "Which email service is owned by Microsoft?",
        answer: "Hotmail",
    }
];

const ContactList = () => (
    <div>
        {questions.map(item => (
            <Contact answer={item.answer} question={item.question} />
        ))}
    </div>
);

export default ContactList;