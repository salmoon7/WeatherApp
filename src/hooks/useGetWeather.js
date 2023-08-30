import { ActivityIndicator,View,StyleSheet,PermissionsAndroid} from 'react-native';
import React,{useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import  {WEATHER_API_KEY}  from '@env';



const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };



export const useGetWeather=()=>{
const[loading,setLoading]=useState(true)
const[error,setError]=useState("")
const [location, setLocation] = useState(false);
const[weather,setWeather]=useState()
const [lat,setLat]=useState([])
const [lon,setLon]=useState([])

const fetchWeatherData=async()=>{
try{
  const res=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`)
  const data=await res.json()
  setWeather(data)
setLoading(false)
}catch(e){
  setError('Could not fetch data')

}finally{
  setLoading(false)
}
}



 
 // function to check permissions and get Location
 const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          async position => {
            console.log(position);
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchWeatherData(); 
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
            
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    }, [lat, lon]);
    console.log(location);
  };

    return[loading,error,weather]
}