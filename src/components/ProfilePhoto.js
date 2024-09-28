import React, { useState, useEffect, useContext } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { IP_PROVISORIO } from '@env';
import { AuthContext } from "../contexts/AuthContext";

export default function ProfilePhoto({ size, color }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  const { userId } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUserPhoto() {
      try {
        const response = await fetch(`http://${IP_PROVISORIO}/api/users/${userId}`);
        const userData = await response.json();
        setImageSrc(`http://${IP_PROVISORIO}/${userData.imageSrc}`);
      } catch (error) {
        console.error('Error fetching user photo:', error);
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      fetchUserPhoto();
    }
  }, [userId]);

  return (
    <View style={[styles.container, { height: size, width: size, borderColor: color, borderRadius: size / 2 }]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Image
          style={[styles.image, { height: size, width: size, borderRadius: size / 2 }]}
          source={{ uri: imageSrc }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden'
  },
  image: {
    resizeMode: 'cover',
    backgroundColor: '#ddd'
  },
});
