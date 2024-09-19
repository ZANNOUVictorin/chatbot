<template>
  <div id="app">
    <div v-for="(interaction, index) in interactions" :key="index" class="interaction">
      <div class="bot-container">
        <div v-for="(msgGroup, groupIndex) in interaction.bot" :key="groupIndex">
          <div v-for="(msg, msgIndex) in msgGroup" :key="msgIndex" class="message bot">
            {{ msg }}
          </div>
        </div>
      </div>
      <div class="utilisateur-container">
        <div v-for="(respGroup, groupIndex) in interaction.utilisateur" :key="groupIndex">
          <div v-for="(resp, respIndex) in respGroup" :key="respIndex" class="message utilisateur">
            {{ resp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Data from "./test.json";
export default {
  setup() {
   
    const interactionsData =  Data;

    const interactions = ref(interactionsData);

    return {
      interactions,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 20px;
}

.interaction {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.bot-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alignement des messages du bot à gauche */
}

.utilisateur-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Alignement des messages de l'utilisateur à droite */
}

.message {
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0; /* Ajout d'une marge entre les messages */
}

.bot {
  background-color: #e1f5fe; /* Couleur de fond pour le bot */
}

.utilisateur {
  background-color: #ffebee; /* Couleur de fond pour l'utilisateur */
}
</style>
