import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const Grafico = ({ data, title }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: data.labels,
          datasets: [{ data: data.values }]
        }}
        width={screenWidth}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#f5f5f5",
          backgroundGradientTo: "#e0e0e0",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 10
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#007AFF"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10
        }}
      />
    </View>
  );
};

export default Grafico;
