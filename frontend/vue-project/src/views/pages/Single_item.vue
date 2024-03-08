<script>
import { foodService } from "../../services/food.service";
 
export default {
  data() {
    return {
      post: {},
      error: "",
    };
  },
  created() {
    this.post.loading = true;
 
    postService
      .getSinglePost(this.$route.params.id)
      .then((post) => {
        this.post = post;
      })
      .catch((error) => (this.error = error));
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { new_post } = this;
 
      if (!new_post) {
        return;
      }
    },
  },
};
</script>