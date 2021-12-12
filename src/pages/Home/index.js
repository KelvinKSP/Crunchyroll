import React from "react";
import { SafeAreaView, ScrollView, Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import BarraFooter from "../../routes/Footer";
import BarraHeader from "../../routes/Header";
import styles from "../Home/style";
import EspacoPequeno from "../../utilidade/espaco";
import EspacoGrande from "../../utilidade/espaco-grande";
import EspacoMedio from "../../utilidade/espaco-medio";

export default function Home ({navigation}) {

    return (
      <>
      {/* HEADER */}
      <BarraHeader />
        <View style={styles.container}>
          <SafeAreaView>
            <ScrollView>
              {/* Background principal */}
              <ImageBackground
                  imageStyle ={{opacity: 0.4}}
                  style={styles.imageBackgroundMain}
                  source={require('../../img/imagens/hxh.jpg')} 
              />
              <View style={styles.textView}>
                {/* Texto do Background  */}
                <Text style={styles.imageTextTitulo}>Hunter x Hunter</Text>
                <Text style={styles.imageTextDesc}>A série conta a história de Gon Freecss, 
                  um garoto de 12 anos que pretende se tornar um Hunter, 
                  um caçador de tesouros, lugares perdidos e criaturas estranhas.
                </Text>
                
                <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textoBtn}>ASSISTIR AGORA</Text>
                    <Image 
                      style={styles.seta}
                      resizeMode='stretch' 
                      source={require('../../img/icons-footer/seta.png')}
                    />
                </TouchableOpacity>
              </View>
              
              {/* INICIO DA PARTE DOS ANIMES POPULARES */}
              <Text style={styles.tituloTema}>  
                POPULARES
              </Text>  
              <View style={styles.containerPopulares}>
                <ScrollView horizontal={true}>     
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime1.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>The Ancient Magus Bride</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}></Text>
                      <Text style={styles.dublado}>  </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                    </View>                
                  </View>
                  
                  <View>
                    <Image 
                       style={styles.imagePoster}
                      source={require('../../img/imagens/anime2.jpg')} 
                    />
                  <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>Demon Slayer</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}> Dublado </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                  </View>
                  </View>
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime3.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>Attack on Titan</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}> Dublado </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>  
                    </View>  
                  </View>
              
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime4.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>The Faraway Paladin</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}></Text>
                      <Text style={styles.dublado}>  </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                    </View>  
                  </View>
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime5.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>Blade Runner - Black Lotus</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}> Dublado </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                    </View>  
                  </View>
                </ScrollView>
              </View>
              {/* FIM DA PARTE DOS ANIMES POPULARES */}
              <EspacoPequeno />
               
               {/* COMEÇO DO BANNER */}
              <View>
                <ImageBackground 
                  style={styles.bannerImg}
                  source={require('../../img/imagens/anime2.jpg')}
                />
                <Image 
                      style={styles.posterBanner}
                      source={require('../../img/imagens/anime2.jpg')} 
                />
              <View style={styles.blocoAzulBanner}>
                <Text style={styles.tituloBanner}>Demon Slayer</Text>
                <Text style={styles.descBanner}>Em Demon Slayer, Tanjiro, um bondoso jovem que ganha a vida vendendo... </Text>
                <Text style={styles.serieBanner}>SÉRIE</Text>
                <Text style={styles.miniCirculosBanner}>°°°</Text>
              </View>
            </View>
             {/* FIM DO BANNER */}     
              <EspacoGrande />
             {/* COMEÇO DO BANNER */}
             <View>
                <ImageBackground 
                  style={styles.bannerImg}
                  source={require('../../img/imagens/anime3.jpg')}
                />
                <Image 
                      style={styles.posterBanner}
                      source={require('../../img/imagens/anime3.jpg')} 
                />
              <View style={styles.blocoAzulBanner}>
                <Text style={styles.tituloBanner}>Attack on Titan</Text>
                <Text style={styles.descBanner}>Tendo se voltado contra seus amigos, Eren se tornou o principal mal... </Text>
                <Text style={styles.serieBanner}>SÉRIE</Text>
                <Text style={styles.miniCirculosBanner}>°°°</Text>
              </View>
            </View>
             {/* FIM DO BANNER */} 
             <EspacoGrande />
             {/* INICIO DA PARTE DOS ANIMES SHOUNEN */}
              <Text style={styles.tituloTema}>  
                SHOUNEN
              </Text>  
              <View style={styles.containerPopulares}>
                <ScrollView horizontal={true}>     
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime6.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>Naruto Shippuden</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}>Dublado</Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                    </View>                
                  </View>
                  
                  <View>
                    <Image 
                       style={styles.imagePoster}
                      source={require('../../img/imagens/anime7.jpg')} 
                    />
                  <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>One Piece</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}></Text>
                      <Text style={styles.dublado}>  </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                  </View>
                  </View>
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime8.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>My Hero Academia</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}> Dublado </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>  
                    </View>  
                  </View>
              
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime9.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>Black Clover</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}>Dublado</Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                    </View>  
                  </View>
                  <View>
                    <Image 
                      style={styles.imagePoster}
                      source={require('../../img/imagens/anime10.jpg')} 
                    />
                    <View style={styles.blocoAzul}>
                      <Text style={styles.nomeAnime}>Dragon Ball Super</Text>
                      <Text style={styles.serie}>SÉRIE</Text>
                      <Text style={styles.miniCirculo}>°</Text>
                      <Text style={styles.dublado}> Dublado </Text>
                      <Text style={styles.miniCirculos}>°°°</Text>
                    </View>  
                  </View>
                </ScrollView>
              </View>    
              {/* FIM DA PARTE DOS ANIMES SHOUNEN */}
              <EspacoPequeno />
              {/* COMEÇO DO BANNER */}
             <View>
                <ImageBackground 
                  style={styles.bannerImg}
                  source={require('../../img/imagens/anime6.jpg')}
                />
                <Image 
                      style={styles.posterBanner}
                      source={require('../../img/imagens/anime6.jpg')} 
                />
              <View style={styles.blocoAzulBanner}>
                <Text style={styles.tituloBanner}>Naruto Shippuden</Text>
                <Text style={styles.descBanner}>Naruto: Shippūden é uma continuação da série de... </Text>
                <Text style={styles.serieBanner}>SÉRIE</Text>
                <Text style={styles.miniCirculosBanner}>°°°</Text>
              </View>
            </View>
             {/* FIM DO BANNER */}
             <EspacoMedio />  
               {/* PARTE QUE ENCERRA A ROLAGEM DA PAGINA */}
              <View>
                <Text style={styles.msgFim}>Você chegou ao fim da lista.</Text>
                <TouchableOpacity style={styles.btnVerTudo}>
                  <Text style={styles.textoBtnVerTudo}>VER TUDO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPremium}>
                  <Text style={styles.textoBtnPremium}>TORNE-SE PREMIUM</Text>
                  <Image 
                      style={styles.seta}
                      resizeMode='stretch' 
                      source={require('../../img/icons-footer/coroa.png')}
                  />
                </TouchableOpacity>
            </View>
            <EspacoPequeno /> 
            <EspacoPequeno /> 
            <EspacoPequeno /> 
            <EspacoPequeno /> 
            <EspacoPequeno /> 
            </ScrollView>
           {/* ACABA A ROLAGEM DA PAGINA */}
          </SafeAreaView>     
        </View>
        {/* FOOOTER */}
        <BarraFooter />
      </>
    )
}