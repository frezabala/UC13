import jwt from 'jsonwebtoken'

interface Payload {
  id: number
  email: string
}

//payload são as infomações que enviamos do nosso usuario
export const generateToken = (payload: Payload) => {

    //O metodo sing de JWT retorna o token JWT
    //enviamos as infomações do usuario (payload)
    // o nosso secret
    // e a infomações de quando expira
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN) })
}


export const verifyToken =(token:string) =>{
  try{
    return jwt.verify(token, process.env.JWT_SECRET!)
  } catch(err: any){
    return null
  }
}