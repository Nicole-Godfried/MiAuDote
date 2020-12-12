<template>
 
 <v-footer class="col-12" color="#00aFbb"> 
         
      <div class="footer">
     <img size="30px" class="logo-footer" src="../assets/MiAuDote_Logo_02.png" alt="">
     </div>
     
 </v-footer>
  
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
};
</script>

<style scoped>

    .footer{
    display: flex;
    margin: 0 auto;
    
    
    }

    .logo-footer{
        
        width: 50%;
        
    }
</style>