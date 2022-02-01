import React from 'react';
import '../styles/DishesSection.css';

function DishesSection() {
    return(
        <section className="section-2" id="Dishes">
            <h1 className="food-header">Dishes</h1>
            <div className='grid'>
                <article>
                    <h3>Food 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem modi quasi ea fugit rerum. Consequuntur nesciunt iste, facilis non, error temporibus perspiciatis odit laboriosam voluptatibus iusto minima suscipit eos?</p>
                    <button className="btn-1">Find!</button>
                </article>
        
                <article>
                    <h3>Food 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem modi quasi ea fugit rerum. Consequuntur nesciunt iste, facilis non, error temporibus perspiciatis odit laboriosam voluptatibus iusto minima suscipit eos?</p>
                    <button className="btn-2">Find!</button>
                </article>
        
                <article>
                    <h3>Food 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem modi quasi ea fugit rerum. Consequuntur nesciunt iste, facilis non, error temporibus perspiciatis odit laboriosam voluptatibus iusto minima suscipit eos?</p>
                    <button className="btn-3">Find!</button>
                </article>
            </div>
        </section>
    );
  }
  
  export default DishesSection;