export const validaCadastro = {
    async validaCadastro(req, res, next) {
        const {email, senha} = req.body;
        if(email){
            const userEmail = await UserService.buscaPorEmail(email);
            if(userEmail){
                return res.status(400).json({mensagem: 'Usuario com esse email já existe! Tente novamente com outro.'});
            }
        }
        if(!email){
            return res.status(400).json({mensagem: 'Email não fornecido! Tente novamente com um email válido.'});
        }
        if(!email.includes('@') || !email.includes('.')){
            return res.status(400).json({mensagem: 'Email inválido! Tente novamente com um endereço de email válido.'});
        }
        if(!senha){
            return res.status(400).json({mensagem: 'Senha não informada! Insira uma senha válida!.'});
        }
        if(senha.length < 8){
            return res.status(400).json({mensagem: 'Senha inválida! A senha precisa ter pelo menos 8 caracteres.'});
        }

        let maiuscula = false;
        let numero = false;
        let caractere = false;

        for(let i = 0; i < senha.length; i++){
            if(senha[i] >= 'A' && senha[i] <= 'Z'){
                maiuscula = true;
            } else if(senha[i] >= '0' && senha[i] <= '9'){
                numero = true;
            }else if('!@#$%&'.includes(senha[i])){
                caractere = true;
            }
        }
        
        if (!(maiuscula && numero && caractere)) {
            return res.status(400).json({mensagem: 'Senha inválida! A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.'});
        }

        next();
    }
}

export default validaCadastro