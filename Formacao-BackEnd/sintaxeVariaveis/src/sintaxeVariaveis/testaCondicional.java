package sintaxeVariaveis;

public class testaCondicional {
	public static void main(String[] args) {
		System.out.println("Testando Condicionais");
		int idade = 16;
		int quantidadePessoas = 3;
		if (idade >= 18) {
			System.out.println("você tem mais de 18 anos");
			System.out.println("seja bem vindo");
		}
		else {
			if(quantidadePessoas >=2) {
				System.out.println("você não tem 18 mas pode entrar, pois está aconpanhado.");
			}
			else {
				System.out.println("Infelizmente você não pode entrar.");
			}
			
		}
	}

}
