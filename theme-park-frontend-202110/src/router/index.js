/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import Ride from '@/components/Ride.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import ParkMap from '@/components/ParkMap.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: ParkMap },
    { path: '/ride/:rideId', name: 'Ride', component: Ride },
    { path: '/photo-gallery', name: 'PhotoGallery', component: PhotoGallery }
  ]
})
