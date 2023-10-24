# Fancy Box

## Instructions for Developers

## Step 1 - Inject this script in you index.html file

` <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
    integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>`

## Step 2 - Inject the link in the inde.html file

` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
    integrity="sha512-H9jrZiiopUdsLpg94A333EfumgUBpO9MdbxStdeITo+KEIMaNfHNvwyjjDJb+ERPaRS6DpyRlKbvPUasNItRyw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

## Step 2 - Inject the jquery in the inde.html file

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>`

## data-fancybox="gallery"

 <p style="display: none;">
    <ng-container *ngFor="let data of images;let i =index;">
        <div class="">
            <a id='fancy123' data-fancybox="gallery" [href]="data">
                <img [src]="data" width="200" height="150" />
            </a>
        </div>
    </ng-container>
</p>
