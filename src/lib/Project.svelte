<script>
    export let project;
</script>

<div class="project">
    <a href="{project.link}">
        {#if project.image && project.image !== ''}
            <img alt='' src="images/{project.image}">
        {/if}
        {#if project.video}
            <video autoplay muted loop src="videos/{project.video}"></video>
        {/if}
        <h4>{project.title}</h4>
        <div class="publication">{project.publication}</div>
        <div class="date">{project.date}</div>
    </a>
</div>

<style>
    .project {
        margin-bottom: 2rem;
    }
    a {
        color: black;
        text-decoration: none;
    }
    a h4 {
        text-decoration: underline;
    }
    .publication {
        font-size: 0.95rem;
    }
    .date {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 700;
        color: #777
    }
    h4 {
        margin-top: 0;
        margin-bottom: 5px;
    }
    img {
        border: 1px solid black;
        max-width: 100%;
        height: auto;
        margin-bottom: 5px;
    }
    video {
        border: 1px solid black;
        width: 100%;
        height: auto;
        margin-bottom: 5px;
    }
   
</style>