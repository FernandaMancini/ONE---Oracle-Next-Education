package bytebank;

public class TestaMetodo {
		public static void main(String[] args) {
			Conta contaDoPaulo = new Conta();
			contaDoPaulo.saldo = 100;
			contaDoPaulo.deposita(50);
			System.out.println(contaDoPaulo.saldo);
			
			boolean conseguirRetirar = contaDoPaulo.saca(20);
			System.out.println(contaDoPaulo.saldo);
			System.out.println(conseguirRetirar);
			
			Conta contaDaMarcela = new Conta();
			contaDaMarcela.deposita(1000);
			boolean sucessoTransferencia = contaDaMarcela.transfere(300, contaDoPaulo);
			if(sucessoTransferencia) {
				System.out.println("Transferencia com sucesso");
			}else {
				System.out.println("Faltou dinheiro");
			}
			System.out.println(contaDaMarcela.saldo);
			System.out.println(contaDoPaulo.saldo);
			
			contaDoPaulo.titular = "Paulo Silveira";
			System.out.println(contaDoPaulo.titular);
			
		}

}
