package bytebankHerdado;

public class TestaFuncionario {
	public static void main(String[] args) {
		
		Cliente cliente = new Cliente();
		
		Gerente nico = new Gerente();
		nico.setNome("Nico Steppat");
		nico.setCpf("123456789-10");
		nico.setSalario(2500.5);
		
		System.out.println(nico.getNome());
		System.out.println(nico.getBonoficacao());
	}

}
