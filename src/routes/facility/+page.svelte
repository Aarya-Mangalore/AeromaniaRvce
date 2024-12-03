<script>
    import Content from "$lib/components/Content.svelte"
</script>

<main>

    <h1>
        Open Day
    </h1>

    <Content Head="low subsonic Wind tunnel"
    text="A good blowing machine"
    />

    <Content Head="supersonic Wind tunnel"
    text="A good blowing machine"
    />

    <Content Head="supersonic free jet"
    text="A good blowing machine"
    />

    <Content Head="Cascade Wind tunnel"
    text="A good rotating machine"
    />

    <Content Head="variable pitch propeller"
    text="A good rotating machine"
    />

    <Content Head="micro gas turbine"
    text="A good power machine"
    />

    <Content Head="UDM"
    text="A good pulling machine"
    />

    <Content Head="CAD labs"
    text="A good computational hub"
    />

</main>

<style>

    h1{
        text-align: center;
        text-transform: uppercase;
        padding: 2%;
    }

    h1:hover {
        color: #00ffff;
        transform: scale(1.02);
        text-decoration-skip-ink: auto;
        transition: 0.3s;
        user-select: none;
    }

</style>