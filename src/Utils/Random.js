export const uuid = () => {
  const S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

export function id() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)+Date.now();
}