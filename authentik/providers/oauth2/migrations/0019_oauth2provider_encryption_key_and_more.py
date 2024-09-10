# Generated by Django 5.0.9 on 2024-09-11 15:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authentik_crypto", "0004_alter_certificatekeypair_name"),
        ("authentik_providers_oauth2", "0018_alter_accesstoken_expires_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="oauth2provider",
            name="encryption_key",
            field=models.ForeignKey(
                help_text="Key used to encrypt the tokens. When set, tokens will be encrypted and returned as JWEs.",
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="oauth2provider_encryption_key_set",
                to="authentik_crypto.certificatekeypair",
                verbose_name="Encryption Key",
            ),
        ),
        migrations.AlterField(
            model_name="oauth2provider",
            name="signing_key",
            field=models.ForeignKey(
                help_text="Key used to sign the tokens.",
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="oauth2provider_signing_key_set",
                to="authentik_crypto.certificatekeypair",
                verbose_name="Signing Key",
            ),
        ),
    ]
