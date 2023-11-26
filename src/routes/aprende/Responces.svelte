<script>
    export let answers = []
    export let readRes = ()=>{}
</script>

{#each answers as a }
    <div class="col-12 shadow-sm p-3 rounded my-2">
        <div class="d-flex justify-content-between w-100">
            {a} 
            <span on:click={()=>{readRes(a)}}>
               🔊
            </span>
        </div>
        
    </div>       
{/each}

<style>
    span{
        cursor: pointer;
    }
    span:hover{
        transform: scale(1.2);
    }
</style>