<slot />

<style>
    * {
        box-sizing: border-box;
        user-select: none; /* Standard syntax */
        -webkit-user-select: none; /* Chrome, Opera, Safari */
        -moz-user-select: none; /* Firefox 2+ */
        -ms-user-select: none; /* IE 10+ */

        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        -webkit-tap-highlight-color: transparent;
    }

    @font-face {
        font-family: 'Architects Daughter';
        src: url('/fonts/ArchitectsDaughter-Regular.ttf') format('truetype');
        font-display: fallback;
    }

    @font-face {
        font-family: 'Comic Neue';
        src: url('/fonts/ComicNeue-Regular.ttf') format('truetype');
        font-display: fallback;
    }

    @font-face {
        font-family: 'MPLUSRounded1c';
        src: url('/fonts/MPLUSRounded1c-Black.ttf') format('truetype');
        font-display: fallback;
    }

    :global(body) {
        height: 100%;
        width: 100%;
        margin: 0;
        font-family: 'Architects Daughter', cursive;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        overflow-x: hidden;
        transition: all 0.25s ease !important;
    }
</style>