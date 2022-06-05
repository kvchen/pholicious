# Pho-Tung Cafe

Source files for publishing photungcafe.com.

## Development

1.  **Clone the repository.**

    Run `git clone git@github.com:kvchen/pholicious.git`.

2.  **Install npm.**

    Ensure you have `yarn` installed. For Windows, follow the instructions here:
    https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

3.  **Install dependencies.**

    ```shell
    cd pholicious
    yarn install
    ```

4.  **Start developing.**

    ```shell
    cd pholicious/
    yarn run develop
    ```

5.  **Open the code and start customizing!**

    Open your browser and point it at http://localhost:8000.
    You should see the website appear.

6.  **Deploy the site.**

    After making changes, you can now deploy the site to production:

    ```shell
    yarn run deploy
    ```

    Visit photungcafe.com and you should see the changes reflected after a few
    minutes.

## Notes

A lot of options don't require code changes - you just have to update the
contents in `content/config.yaml`. Then run `yarn run develop` to check that
the changes do what you want, and `yarn run deploy` to push the changes to
production.
