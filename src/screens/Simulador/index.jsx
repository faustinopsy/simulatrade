import {  Text, View} from "react-native"
import { styleSobre } from "./styles"
import Grafico from "../../components/Grafico"
export default function Simulador(){
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        values: [10, 20, 15, 25, 30, 22]
      };
    return(
        <View style={styleSobre.container}>
            <Text style={styleSobre.texto}>Olá mundo</Text>
            <View style={styleSobre.container}>
                <Grafico data={data} title="Vendas Mensais" />
            </View>
        </View>
    )
}
