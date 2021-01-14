<template>
  <div class="programmation-administer">
    <h1>Création d'un concert</h1>
    <form class="form-creation">

      <div class="inpunt-creation">
        <b-col sm="2">
          <label for="input-small">Artiste:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Entrer l'artiste ou groupe"
          ></b-form-input>
        </b-col>
      </div>

          <div class="inpunt-creation">
        <b-col sm="2">
          <label for="input-small">Style de musique:</label>
        </b-col>
        <b-col sm="10">
          <b-form-select
            v-model="selected"
            size="sm"
            :options="genres"
          ></b-form-select>
        </b-col>
      </div>

        <div class="inpunt-creation">
        <b-col sm="2">
          <label for="input-small">Journée du Concert:</label>
        </b-col>
        <b-col sm="10">
          <b-form-select
            v-model="selected"
            size="sm"
            :options="days"
          ></b-form-select>
        </b-col>
      </div>

      <div class="inpunt-creation">
        <b-col sm="2">
          <label for="input-small">Heure:</label>
        </b-col>
        <b-col sm="10">
          <b-form-select
            v-model="selected"
            size="sm"
            :options="options"
          ></b-form-select>
        </b-col>
      </div>

       <div class="inpunt-creation">
        <b-col sm="2">
          <label for="input-small">Scène:</label>
        </b-col>
        <b-col sm="10">
          <b-form-select
            v-model="selected"
            size="sm"
            :options="stages"
          ></b-form-select>
        </b-col>
      </div>

      <div class="inpunt-creation-checkbox">
         <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="Oui"
      unchecked-value=""
    >
      Tête d'affiche ? <strong>{{ status }}</strong>
    </b-form-checkbox>
      </div>

 <div class="inpunt-creation-description">
        <b-col sm="2">
          <label for="input-small">Description de l'artiste :</label>
        </b-col>
        <b-col sm="10">
        <b-form-textarea
        id="textarea-large"
        size="lg"
        placeholder=""
      ></b-form-textarea>
        </b-col>
      </div>

    
    <router-link to="/BackOffice">
        <button class="big-btn" id="big-btn-creation" type="submit">Créer un concert</button>
      </router-link>

    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "",
      selected: null,
      options: [
        { value: null, text: "Selectionner une heure de concert" },
        { value: "a", text: "18h" },
        { value: "b", text: "19h" },
        { value: "c", text: "20h" },
        { value: "d", text: "21h" },
        { value: "e", text: "22h" },
        { value: "f", text: "23h" },
        { value: "g", text: "00h" },
        { value: "h", text: "01h" },
        { value: "i", text: "02h" },
      ],
       genres: [
        { value: null, text: "Selectionner un style de musique" },
        { value: "a", text: "Rap" },
        { value: "b", text: "Jazz" },
        { value: "c", text: "Variété" },
        { value: "d", text: "Electro" },
        { value: "e", text: "Variété" },
        { value: "f", text: "Rock" },
        { value: "g", text: "Metal" },
        { value: "h", text: "Pop" },
      ],
       days: [
        { value: null, text: "Selectionner une journée" },
        { value: "a", text: "Vendredi" },
        { value: "b", text: "Samedi" },
        { value: "c", text: "Dimanche" },
      ],
       stages: [
        { value: null, text: "Selectionner une scène" },
        { value: "a", text: "Scène A" },
        { value: "b", text: "Scène B" },
        { value: "c", text: "Scène C" },
      ],
      status: 'Oui',
     
    };
  },
};
</script>

<style lang="scss">
.form-creation {
  margin-top: 5rem;
}

.form-creation label {
  font-weight: bold;
}

.inpunt-creation {
  margin-top: 2rem;
}

.inpunt-creation-checkbox{
    margin-left:1rem;
    margin-top: 2rem;
}

b, strong {
    font-weight: bolder;
    color:var(--orange);
}

.inpunt-creation-description{
    margin-top: 2rem;
}

#big-btn-creation{
    margin: 2rem 2rem 4rem 4rem;
     border-radius: 20px;
}

</style>
