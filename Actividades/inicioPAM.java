import javax.swing.JOptionPane;

public class inicioPAM 
{
   public static void main(String[] args) 
   {
      String menu = """
                      Seleccione una opci\u00f3n:
                      1. Reglamento POO
                      2. Lineamientos Classroom
                      3. Fechas de parciales
                      4. Porcentajes por parcial
                      5. Salir
                      """;
        String opcion = JOptionPane.showInputDialog(menu);

         switch (opcion) 
         {
               case "1" -> JOptionPane.showMessageDialog(null, """
                     Reglamento POO:
                     1. 
                     2. 
                     3. 
                     4. 
                     """);
               case "2" -> JOptionPane.showMessageDialog(null, """
                     Lineamientos Classroom:
                     1. 
                     2. 
                     3. 
                     4. 
                     """);
               case "3" -> JOptionPane.showMessageDialog(null, """
                     Fechas de parciales:
                     - 
                     - 
                     - 
                     """);
               case "4" -> JOptionPane.showMessageDialog(null, """
                     Porcentajes por parcial:
                     - 
                     - 
                     - 
                     """);
               case "5" -> JOptionPane.showMessageDialog(null, "Saliendo del programa.");
               default -> JOptionPane.showMessageDialog(null, "Opci\u00f3n no v\u00e1lida. Por favor, intente de nuevo.");
         }
   }
}

