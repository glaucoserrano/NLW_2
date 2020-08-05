import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem(){
   return(
      <article className="teacher-item">
      <header>
         <img src="https://media.istockphoto.com/vectors/teacher-avatar-vector-icon-vector-id1135046915" alt="sem foto"/>
         <div>
            <strong>Nome do professor</strong>
            <span>Matéria</span>
         </div>
      </header>
      <p>
         Biografia cadastrada
      </p>
      <footer>
         <p>
            Preço/hora
            <strong>R$ 9999,99</strong>
         </p>
         <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
         </button>
      </footer>
      </article>
   );
}
export default TeacherItem;

