import React from 'react'
import AiToolCard from './AiToolCard'

const aiToolsList = [
    {
        name:'AI Career Q&A Chat',
        desc:'Chat with AI Agent',
        icon:'/chatbot.png',
        button:'Lets Chat',
        path:'/ai-tools/ai-chat'
    },
    {
        name:'AI Resume Analyzer',
        desc:'Chat with AI Agent',
        icon:'/resume.png',
        button:'Analyze Now',
        path:'/ai-chat'
    },
    {
        name:'Learning Roadmap',
        desc:'Chat with AI Agent',
        icon:'/roadmap.png',
        button:'Generate Now',
        path:'/ai-chat'
    },
    {
        name:'Cover Letter Genarator',
        desc:'Chat with AI Agent',
        icon:'/cover.png',
        button:'Create Now',
        path:'/ai-chat'
    }
]

function AiTools() {
  return (
    <div className='mt-7 p-5 bg-white border rounded-xl'>
        <h2 className='font-bold text-lg'>Available AI Tools</h2>
        <p>start Building and Shape Your Carrer with this exclusive AI Tools</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
            {aiToolsList.map((tool:any,index)=>(
                <AiToolCard tool = {tool} key={tool.name}/>
            ))}
        </div>
    </div>
  )
}

export default AiTools