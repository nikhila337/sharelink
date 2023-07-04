import { useState,useRef } from 'react';

function Sharelink({value,text}) {

    const linkReef = useRef(null)
    const linkReef2 = useRef(null)
    const linkReef3 = useRef(null)
    const linkReef4 = useRef(null)

    function copyClip (e) {

        if (linkReef.current) {
            const text = linkReef.current.innerText;
            console.log(text)
            navigator.clipboard.writeText(text);
          }
    }

    function copyClip2 (e) {

      if (linkReef2.current) {
          const text = linkReef2.current.innerText;
          console.log(text)
          navigator.clipboard.writeText(text);
        }
  }

  function copyClip3 (e) {

    if (linkReef3.current) {
        const text = linkReef3.current.innerText;
        console.log(text)
        navigator.clipboard.writeText(text);
      }
}

function copyClip4 (e) {

  if (linkReef4.current) {
      const text = linkReef4.current.innerText;
      console.log(text)
      navigator.clipboard.writeText(text);
    }
}

  return (
   <>
    <h3>Twitter</h3>
    <p id='Twitter' ref={linkReef}>https://twitter.com/intent/tweet?url={value}&text={text}</p>
    <button onClick={copyClip} >Copy</button>
    <h3>Facebook</h3>
    <p id='Facebook'  ref={linkReef2}>https://www.facebook.com/sharer/sharer.php?u={value} </p>
    <button onClick={copyClip2} >Copy</button>
    <h3>LinkedIn</h3>
    <p id='LinkedIn' ref={linkReef3}>https://www.linkedin.com/shareArticle?mini=true&url={value} </p>
    <button onClick={copyClip3} >Copy</button>
    <h3>Pinterest</h3>
    <p id='Pinterest' ref={linkReef4}>https://pinterest.com/pin/create/button/?url={value}&media=&description={text} </p>
    <button onClick={copyClip4} >Copy</button>
  
   </>
  );
}

export default Sharelink;
