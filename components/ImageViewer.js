import { StyleSheet, Image } from 'react-native';

export default function ImageViewer( { placeHolderImage, selectedImage } ) {

    const imageSource = selectedImage ? { uri : selectedImage } : placeHolderImage; 
    return (
        <Image source={imageSource} style={styles.image} />
    );  
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height:440,
        borderRadius: 18
      }
});