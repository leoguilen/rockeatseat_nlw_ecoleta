import React, { useState, useEffect } from "react";
import axios from 'axios';
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';

interface IBGEUFResponse  {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

interface PickerSelectItem {
    label: string;
    value: string;
}

interface Location {
    uf: string;
    city: string;
}

interface Props {
    onSelectedLocation: (location: Location) => void;
}

const Picker: React.FC<Props> = ({ onSelectedLocation }) => {
    const [ufs, setUfs] = useState<PickerSelectItem[]>([]);
    const [cities, setCities] = useState<PickerSelectItem[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    // Retorna todos as uf do brasil
    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://ibgefunctions.netlify.app/.netlify/functions/estados').then(res => {
            const ufInitials = res.data.map(uf =>
            {
                return {
                    label: uf.sigla,
                    value: uf.sigla }
            });
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
      if (selectedUf === "0") return;

      axios.get<IBGECityResponse[]>(
          `https://ibgefunctions.netlify.app/.netlify/functions/cidades?uf=${selectedUf}`)
        .then((res) => {
          const cityNames = res.data.map((city) => 
          {
              return {
                label: city.nome,
                value: city.nome,
              };
          });
          setCities(cityNames);
        });
    }, [selectedUf]);

    useEffect(() => {
        onSelectedLocation({uf: selectedUf, city: selectedCity})
    }, [selectedCity])

    function handleSelectUf(value: string) {
      setSelectedUf(value);
    }

    function handleSelectCity(value: string) {
      setSelectedCity(value);
    }

    return (
      <>
        <RNPickerSelect
            style={{ inputAndroid: styles.input }}
            placeholder={{ label: 'Selecione a UF' }}
            onValueChange={handleSelectUf} 
            items={ufs} 
            Icon={() => {
                return <Icon name="chevron-down" style={{ padding: 20 }} size={24} color="gray" />;
            }}
        />
        <RNPickerSelect 
            style={{ inputAndroid: styles.input }}
            placeholder={{ label: 'Selecione a cidade' }}
            onValueChange={handleSelectCity} 
            items={cities} 
            Icon={() => {
                return <Icon name="chevron-down" style={{ padding: 20 }} size={24} color="gray" />;
            }}
        />
      </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        color: '#6C6C80'
    },
});

export default Picker;