
// miguel => [m,i,g,u,e,l] => string => string[]
// [m,i,g,u,e,l] => miguel => string[] => string




const parseString = (input:string| string[]): string | string[] => {
  if(Array.isArray(input)){
    return input.join('');
  } else {
    return input.split('');
  }
}
