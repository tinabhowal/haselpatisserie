import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import './About2Feedback.css';

const About2Feedback = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const items = [
        { id: 1, title: 'Red Velvet Cake', subtitle: 'Soft, fresh and delicious!', name: 'Seema S' },
        { id: 2, title: 'Healthy Bites', subtitle: 'Non-Oily and light. Perfect for evening snacks', name: 'Gayathri P' },
        { id: 3, title: 'Beetroot Crackers', subtitle: 'The best healthy substitute for anytime cravings', name: 'Manas Gupta' },
        { id: 4, title: 'Almond Cookies', subtitle: 'I can snack on them guilt free', name: 'S Pandit' },
        { id: 5, title: 'Multigrain Cookies', subtitle: 'This one has won my heart', name: 'Kirti Kumari' },
    ];

    //const width = [ '200px', '400px', '220px', '300px', '350px'];
  
    const handleSelection = (id: number) => {
        setSelectedId(id);
    };

    return (
        <div>
            <div className='selectFeedback'>
            {items.map((item) => {
                 //const randomWidth = width[Math.floor(Math.random() * width.length)];
            return (
                <motion.div
                    className='feedbackItem'
                    key={item.id}
                    onClick={() => handleSelection(item.id)}
                    layoutId={item.id.toString()} 
                    style={{
                        zIndex: selectedId ? 1 : 0,
                    }}
                    whileHover={{ scale: 1.05 }} 
                    // whileTap={{ scale: 0.95 }} 
                >
                    <p className='title'>{item.title}</p>
                    <p className='feedback'
                    // style={{ fontStyle: 'italic', color: '#434242' }}
                    >
                      <ImQuotesLeft 
                        style={{
                            color: 'grey', 
                            width: '30px', 
                            height: '30px',
                            opacity: 0.3,  
                            transition: 'opacity 0.3s ease',
                            marginRight: '20px' 
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} 
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}  
                        />
                         {item.subtitle} 
                         
                      <ImQuotesRight 
                        style={{
                            color: 'grey', 
                            width: '30px', 
                            height: '30px',
                            opacity: 0.3,
                            transition: 'opacity 0.3s ease',
                            marginLeft: '20px'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
                            />
                            </p>
                            <p 
                            className='name'
                            // style={{ fontStyle: 'italic', color: '#c2bebe' }}
                            >
                            {item.name}
                         </p>
                </motion.div>
            )})}
            </div>

           
            <AnimatePresence>
                {selectedId && (
                    <div> 
                        <motion.div
                            className="overlay" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedId(null)}
                        />
                        <motion.div
                            className="focused-item"
                            layoutId={selectedId.toString()} 
                            initial={{ scale: 0.5, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }} 
                            exit={{ scale: 0.5, opacity: 0 }} 
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            style={{
                                borderRadius: '20PX',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                minWidth: '200px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                                <p className='title'>
                                {items.find(item => item.id === selectedId)?.title}
                                </p>
                            
                            <p 
                            className='feedback'
                            // style={{ fontStyle: 'italic', color: '#434242' }}
                            >
                            <ImQuotesLeft 
                                style={{
                                    color: 'grey', 
                                    width: '30px', 
                                    height: '30px',
                                    opacity: 0.3,  
                                    transition: 'opacity 0.3s ease',
                                    marginRight: '20px' 
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} 
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}  
                                />
                                {items.find(item => item.id === selectedId)?.subtitle}
                                <motion.button 
                                className='closeButton'
                                // style={{position: 'absolute', top: 0, right: 0, margin: '10px'}}
                                onClick={() => setSelectedId(null)}>Close</motion.button>
                            <ImQuotesRight 
                        style={{
                            color: 'grey', 
                            width: '30px', 
                            height: '30px',
                            opacity: 0.3,
                            transition: 'opacity 0.3s ease',
                            marginLeft: '20px'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
                        />
                       </p>         
                       <p 
                       className='name'
                       style={{ fontStyle: 'italic', color: '#c2bebe' }}
                       >
                            {items.find((item) => item.id === selectedId)?.name }
                         </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            
        </div>
    );
};

export default About2Feedback;



// import * as React from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// import './About2Feedback.css';

// const About2Feedback = () => {
//   const { scrollYProgress } = useViewportScroll();

//   // Set when the component should be visible (for the third page)
//   const opacity = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
//   const scale = useTransform(scrollYProgress, [0.66, 2], [0.2, 2]); // Scale up during that scroll range

//   return (
//     <motion.div className="wrapper" style={{ opacity }}>
//       <motion.div
//         className="container"
//         style={{
//           scale
//         }}
//       >
//         <motion.div
//           className="item"
//           style={{
//             scaleY: scrollYProgress
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About2Feedback;
