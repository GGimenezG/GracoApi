CREATE PROCEDURE `business_addOrUpdate`(
	IN iId INT,
    IN iName VARCHAR(45),
    IN iAddress VARCHAR(45),
    IN iEmail VARCHAR(45),
	IN iPhone VARCHAR(45),
    IN iMission VARCHAR(450),
    IN iVision VARCHAR(450),
    IN iAboutUs VARCHAR(450),
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN

	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    
    CALL validateSession(iToken, iUser, @respuesta);

	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
    
		IF iId > 0 THEN
			UPDATE `desain`.`business`
			SET
			`name` = iName,
			`address` = iAddress,
			`email` = iEmail,
			`mission` = iMission,
			`vision` = iVision,
            `aboutUs` = iAboutUs,
            `phone` = iPhone,
			`updatedAt` = NOW()
			WHERE `idBusiness` = iId;
			SET oRes = 1;
			SET oMessage = 'Business updated successfully';
		ELSE
			INSERT INTO `desain`.`business`
			(
				`name`,
				`address`,
				`email`,
                `phone`,
				`mission`,
				`vision`,
                `aboutUs`,
				`createdAt`
			)
			VALUES
			(
				iName,
				iAddress,
				iEmail,
				iPhone,
				iMission,
				iVision,
                iAboutUs,
				NOW()
			);
            SET oRes = 1;
			SET oMessage = 'Business added successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;

END