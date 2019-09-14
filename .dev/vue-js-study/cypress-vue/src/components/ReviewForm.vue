<template>
    <form class="reviw-form" @onsubmit.prevet="onsubmit">
        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" placeholder="name">
            </input>
        </p>

        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
          </select>  
        </p>

        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
    
</template>

<script>
export default {
    name: 'ReviewForm',

    data: {
        name: null,
        review: null,
        ratinng: null
    }
}
</script>