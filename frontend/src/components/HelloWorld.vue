<script setup>

    import axios from 'axios'

    axios.get('http://localhost:3000/hello').then((res) => {
        console.log(res)
    })
    .catch((er) => {
        console.log(er)
    })

</script>


<template>
   <div class="container-fluid bg-dark">
        <div class="row">
            <div class="col-9" style="border-right: 1px solid white;">
                <input type="text" class="py-2 mt-4 ps-3" style="border-radius: 30px;" placeholder="Type a song name...">
                <button class="btn">
                    <i class="bi bi-search me-2 text-light"></i>
                </button>
                <p class="fw-bold text-light mt-4">Songs</p>
                <div class="row text-light">
                    <div class="col-1 text-end">
                        #
                    </div>
                    <div class="col-9">
                        Title
                    </div>
                    <div class="col-2 text-center">
                        Actions
                    </div>
                </div>
                <hr class="text-white">
                <ul class="text-light">
                    <li class="list-group-item d-flex justify-content-between align-items-start my-1">
                        <span class="mt-2 mx-3">1</span>
                        <img class="" height="45" alt="..." src="https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/ad2bfe02-4323-41e2-8c0e-979c237a0d3f.jpg">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Title
                            </div>
                            Artist name
                        </div>
                        <div class="my-3">
                            13:00
                            <button class="btn">
                                <i class="bi bi-play-circle-fill mx-2 text-light"></i>
                            </button>
                            <button class="btn">
                                <i class="bi bi-share-fill me-2 text-light"></i>
                            </button>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start my-1">
                        <span class="mt-2 mx-3">2</span>
                        <img class="" height="45" alt="..." src="https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/ad2bfe02-4323-41e2-8c0e-979c237a0d3f.jpg">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Title
                            </div>
                            Artist name
                        </div>
                        <div class="my-3">
                            13:00
                            <button class="btn">
                                <i class="bi bi-play-circle-fill mx-2 text-light"></i>
                            </button>
                            <button class="btn">
                                <i class="bi bi-share-fill me-2 text-light"></i>
                            </button>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start my-1">
                        <span class="mt-2 mx-3">3</span>
                        <img class="" height="45" alt="..." src="https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/ad2bfe02-4323-41e2-8c0e-979c237a0d3f.jpg">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Title
                            </div>
                            Artist name
                        </div>
                        <div class="my-3">
                            13:00
                            <button class="btn">
                                <i class="bi bi-play-circle-fill mx-2 text-light"></i>
                            </button>
                            <button class="btn">
                                <i class="bi bi-share-fill me-2 text-light"></i>
                            </button>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start my-1">
                        <span class="mt-2 mx-3">4</span>
                        <img class="" height="45" alt="..." src="https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/ad2bfe02-4323-41e2-8c0e-979c237a0d3f.jpg">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Title
                            </div>
                            Artist name
                        </div>
                        <div class="my-3">
                            13:00
                            <button class="btn">
                                <i class="bi bi-play-circle-fill mx-2 text-light"></i>
                            </button>
                            <button class="btn">
                                <i class="bi bi-share-fill me-2 text-light"></i>
                            </button>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start my-1">
                        <span class="mt-2 mx-3">5</span>
                        <img class="" height="45" alt="..." src="https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/ad2bfe02-4323-41e2-8c0e-979c237a0d3f.jpg">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">
                                Title
                            </div>
                            Artist name
                        </div>
                        <div class="my-3">
                            13:00
                            <button class="btn">
                                <i class="bi bi-play-circle-fill mx-2 text-light"></i>
                            </button>
                            <button class="btn">
                                <i class="bi bi-share-fill me-2 text-light"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2kIUILBPlz4exX9xIFS275?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div class="col-3">
                <p class="text-center text-light fw-bold mt-4">
                    Chats
                    <i class="bi bi-people-fill me-2 text-light position-relative">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            6
                          </span>
                    </i>
                </p>
                
                <ul id="messages">
                    <div class="bg-secondary me-5" style="border-radius: 30px;">
                        <p class="mx-3 text-light py-1">
                            <span class="fw-bold">User 1</span>
                            wsg joren
    
                            <br>
                            <span class="fw-light" style="font-size: 15px;">1:10 PM</span>
                        </p>
                    </div>
                    <div class="bg-secondary ms-5" style="border-radius: 30px;">
                        <p class="mx-3 text-light py-1">
                            i am fine
                            <br>
                            <span class="fw-light" style="font-size: 15px;">1:10 PM</span>
                        </p>
                    </div>
                    <div class="bg-secondary me-5" style="border-radius: 30px;">
                        <p class="mx-3 text-light py-1">
                            <span class="fw-bold">User 1</span>
                            okie dokie
                            <br>
                            <span class="fw-light" style="font-size: 15px;">1:10 PM</span>
                        </p>
                    </div>
                </ul>

                <div style="position: absolute; bottom: 0;">
                    <hr class="text-light">
                    <form id="form" action="">
                        <input type="text" class="py-2 ps-3" id="input" style="border-radius: 30px;" placeholder="Say something...">
                        <button class="btn">
                            <i class="bi bi-send-fill me-2 text-light"></i>
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</template>

