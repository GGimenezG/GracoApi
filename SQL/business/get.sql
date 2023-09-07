CREATE PROCEDURE `business_get`(
	IN iId INT,
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
		IF iId = 0 THEN
			SELECT b.idBusiness as id, b.name, b.address, b.email, b.mission, b.vision, b.phone, b.aboutUs
			/*INTO @selectdata*/
			FROM business b;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SELECT b.idBusiness as id, b.name, b.address, b.email, b.mission, b.vision, b.phone, b.aboutUs
			/*INTO @selectdata*/
			FROM business b 
			WHERE b.idBusiness = iId;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END
