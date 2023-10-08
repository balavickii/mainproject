import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import {GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios'


const Chat = () => {
    const [messages, setMessages] =useState([])

    const YOUR_CHATGPT_API_KEY='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'
    const handleSend= async (newMessages = []) =>{
        try{
            // Get the user message
            const userMessage= newMessages[0];
            // add the user's message
            setMessages(previousMessages=> GiftedChat.append(previousMessages,userMessage))
            const messageText = userMessage.text.toLowerCase();
            const keywords =['school zone','speed limit','traffic signals','right to way','lane discipline','traffic law','child law','marriage Act','food act','food law','define law rules','consumer act','human rights act','Registration act','mobile phones','parking regulation','overtaking','pedestrain crossings','vehicle','public transportation rules','emergency vehicles','traffic fine','traffic fines','helmet fines','helmet fine','Driving Without a Seat Belt','Using Mobile Phone While Driving','Not Wearing Helmet (for two-wheeler riders)','Speeding','Jumping Traffic Signal','Drunk and Drive fines','Drunk Driving','Motor Vehicles (Amendment) Act, 2019','Drunk Driving Fine in India','Road Signs','Marriage act','Marriage eligibility','marriage'];
            if(!keywords.some(keyword => messageText.includes(keyword))){
                //if the message does not contain any food-related keywords
                const botMessage ={
                    _id: new Date().getTime() + 1,
                    text:"I'm your act reference law bot, ask me anithing related to acts and reference ",
                    createdAt: new Date(),
                    user:{  
                        _id:2,
                        name:'Law Bot'
                    }
                    };
                    setMessages(previousMessages=> GiftedChat.append(previousMessages,botMessage));
                    return;
            }
            //if the message contians food-related keywords,fetch arecipe from the api
            const response =await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions',{
                prompt: `Get me a recipe for ${messageText}`,
                max_tokens: 1200,
                temperature:0.5,
                n:1,
            },{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${YOUR_CHATGPT_API_KEY}`,

                }
            });
            console.log(response.data);
            const recipe =response.data.choices[0].text.trim();
            const botMessage ={
                _id: new Date().getTime() + 1 ,
                text: recipe,
                createdAt:new Date(),
                user:{
                    _id:2,
                    name: 'Law Bot'
                }

            };
            setMessages(previousMessages => GiftedChat.append(previousMessages,botMessage));

        } catch(error){
            alert("An error has occured")
            console.log(error);
        }
    };
    return (
    <View style={{flex:1}}>
      <View
      style={{
        backgroundColor:'#F5F5F5',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        marginTop:40,
        marginBottom:5
      }}>
        <Text style={{
            fontSize:32,
            fontWeight:'bold'}}>
            Law Bot
            </Text>
            </View>
        <GiftedChat
        messages={messages}
        onSend={newMessages=>handleSend(newMessages)}
        user={{_id:1}}/>

    
    </View>
  )
}

export default Chat