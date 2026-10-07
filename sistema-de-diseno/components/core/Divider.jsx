import React from 'react';

export function Divider({tone='hairline',thickness,style,...rest}){
  const c={hairline:'var(--border-hairline)',strong:'var(--border-strong)',accent:'var(--border-accent)',lime:'var(--light-lime)'}[tone];
  return <hr style={{border:0,height:thickness??(tone==='hairline'?1:2),background:c,margin:0,width:'100%',...style}} {...rest} />;
}
